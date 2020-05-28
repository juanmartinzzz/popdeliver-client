import { setLocalStorageItem } from "../services/localStorage/localStorage";
import { getCartItemId } from "./CartItem";
import { createToken } from "../services/tokenGenerator/tokenGenerator";
import { getOrderNumber, initialStateRecipient } from "../utils/order";
import {
  ORDER_STATUS_PENDING,
  ORDER_STATUS_REQUESTED
} from "../components/Order/orderStatusMap";

export const getInitialStateOrder = () => ({
  items: [],
  number: null,
  status: null,
  errors: null,
  recipient: initialStateRecipient,
  idempotencyToken: createToken()
});

export const initialStateStore = {
  user: {
    name: null,
    email: "",
    phone: "",
    orders: [],
    address: {},
    addresses: [],
    pointEntries: []
  },
  cart: {
    items: [],
    customizingItem: null
  },
  order: getInitialStateOrder(),
  layout: {
    sectionNumber: 0,
    cartOpen: false,
    userOpen: false,
    deliveryPriceReminderOpen: false,
    outsideServiceHoursNoticeOpen: false
  }
};

export const getStoreAndActions = ({ storeAndSetStore, firebase }) => {
  const [store, setStore] = storeAndSetStore;

  const updateStoreAndLocalStorage = store => {
    setStore(store);
    setLocalStorageItem("store", store);
  };

  const updateProperty = (propertyName, value) => {
    updateStoreAndLocalStorage({ ...store, [propertyName]: value });
  };

  /**
   * User actions
   */

  const userOnFirestoreChange = userOnFirestore => {
    if (userOnFirestore) {
      updateProperty("user", userOnFirestore);
    }
  };

  const userSetPropertyOnFirestore = (propertyName, value) => {
    const newUser = store.user;
    delete newUser.address;

    firebase.set({
      path: "users",
      document: store.user.id,
      data: {
        ...newUser,
        [propertyName]: value
      }
    });
  };

  const userGetFromFirestore = async () => {
    const { email, phone } = store.user;

    if (email !== "" && phone !== "") {
      const users = await firebase.getList({
        path: "users",
        limit: 1,
        where: [
          ["email", "==", store.user.email],
          ["phone", "==", store.user.phone]
        ]
      });

      if (users.length > 0) {
        updateProperty("user", users[0]);
      }
    }
  };

  const userSetProperty = propertyName => ({ target }) => {
    updateProperty("user", {
      ...store.user,
      [propertyName]: target.value
    });
  };

  const userSetAddressProperty = propertyName => ({ target }) => {
    updateProperty("user", {
      ...store.user,
      address: {
        ...store.user.address,
        [propertyName]: target.value
      }
    });
  };

  const userRemoveAddress = indexToRemove => () => {
    if (store.user.addresses.length > 1) {
      userSetPropertyOnFirestore(
        "addresses",
        store.user.addresses.filter((address, index) => index !== indexToRemove)
      );
    }
  };

  const userAddAddress = () => {
    userSetPropertyOnFirestore("addresses", [
      ...store.user.addresses,
      store.user.address
    ]);
  };

  /**
   * Order actions
   */

  const orderOnFirestoreChange = orderOnFirebase => {
    if (orderOnFirebase) {
      updateProperty("order", orderOnFirebase);
    }
  };

  const orderSetRecipient = recipient => {
    updateProperty("order", { ...store.order, recipient });
  };

  const orderCreateOnFirestore = () => {
    updateStoreAndLocalStorage({
      ...store,
      order: {
        ...store.order,
        items: store.cart.items,
        number: getOrderNumber(new Date()),
        status: ORDER_STATUS_PENDING
      },
      layout: {
        ...store.layout,
        cartOpen: false,
        deliveryPriceReminderOpen: false
      }
    });

    // const pointEntries = [
    //   {
    //     points: getTotalPoints(store.cart.items),
    //     created: firebase.getServerTimestamp()
    //   }
    // ];

    setTimeout(() => {
      firebase.set({
        path: "orders",
        document: store.order.idempotencyToken,
        data: {
          ...store.order,
          created: new Date("2020-03-20"),
          status: ORDER_STATUS_REQUESTED
        }
      });
    }, 3000);
  };

  const orderReset = () => {
    updateStoreAndLocalStorage({
      ...store,
      order: {
        ...getInitialStateOrder(),
        // TODO: remove this hack when having a logged user
        recipient: store.order.recipient
      },
      cart: initialStateStore.cart
    });
  };

  const orderSetRating = rating => {
    firebase.set({
      path: "orders",
      document: store.order.idempotencyToken,
      data: {
        ...store.order,
        rating
      }
    });
  };

  const orderSetComments = comments => {
    updateProperty("order", { ...store.order, comments });
  };

  const orderLocalToFirestore = () => {
    firebase.set({
      path: "orders",
      document: store.order.idempotencyToken,
      data: store.order
    });
  };

  /**
   * Layout actions
   */

  const layoutSetOutsideServiceHoursNoticeOpen = outsideServiceHoursNoticeOpen => {
    updateProperty("layout", {
      ...store.layout,
      outsideServiceHoursNoticeOpen
    });
  };

  const layoutSetDeliveryPriceReminderOpen = deliveryPriceReminderOpen => {
    updateProperty("layout", { ...store.layout, deliveryPriceReminderOpen });
  };

  const layoutSetSectionNumber = sectionNumber => {
    updateProperty("layout", { ...store.layout, sectionNumber });
  };

  const layoutSetCartOpen = () => {
    updateProperty("layout", {
      ...store.layout,
      cartOpen: store.cart.items.length > 0
    });
  };

  const layoutSetCartClose = () => {
    updateProperty("layout", { ...store.layout, cartOpen: false });
  };

  const layoutSetUserOpen = () => {
    updateProperty("layout", { ...store.layout, userOpen: true });
  };

  const layoutSetUserClose = () => {
    updateProperty("layout", { ...store.layout, userOpen: false });
  };

  /**
   * Cart actions
   */

  const cartReset = () => {
    updateProperty("cart", initialStateStore.cart);
  };

  const cartRemoveItem = itemToRemove => {
    const items = store.cart.items.filter(item => item.id !== itemToRemove.id);

    updateStoreAndLocalStorage({
      ...store,
      cart: {
        ...store.cart,
        items
      },
      layout: {
        ...store.layout,
        cartOpen: items.length > 0
      }
    });
  };

  const cartSetCustomizingItem = cartItem => {
    updateProperty("cart", {
      ...store.cart,
      customizingItem: cartItem
    });
  };

  const cartUpsertItem = cartItem => {
    if (!cartItem.id) {
      const newCartItem = { ...cartItem, id: getCartItemId() };

      updateProperty("cart", {
        ...store.cart,
        items: [...store.cart.items, newCartItem],
        customizingItem: null
      });
    } else {
      const itemsExceptUpdated = store.cart.items.filter(
        item => item.id !== cartItem.id
      );

      updateProperty("cart", {
        ...store.cart,
        items: [...itemsExceptUpdated, cartItem],
        customizingItem: null
      });
    }
  };

  return {
    store,
    cartReset,
    cartUpsertItem,
    cartRemoveItem,
    cartSetCustomizingItem,

    userAddAddress,
    userSetProperty,
    userRemoveAddress,
    userGetFromFirestore,
    userOnFirestoreChange,
    userSetAddressProperty,
    userSetPropertyOnFirestore,

    orderReset,
    orderSetRating,
    orderSetComments,
    orderSetRecipient,
    orderLocalToFirestore,
    orderOnFirestoreChange,
    orderCreateOnFirestore,

    layoutSetUserOpen,
    layoutSetCartOpen,
    layoutSetUserClose,
    layoutSetCartClose,
    layoutSetSectionNumber,
    layoutSetDeliveryPriceReminderOpen,
    layoutSetOutsideServiceHoursNoticeOpen
  };
};
