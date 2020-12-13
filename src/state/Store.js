import {
  getLocalStorageItemV2,
  setLocalStorageItem,
} from "../services/localStorage/localStorage";
import { getCartItemId } from "./CartItem";
import { createToken } from "../services/tokenGenerator/tokenGenerator";
import { getOrderNumber } from "../utils/order";
import {
  ORDER_STATUS_PENDING,
  ORDER_STATUS_REQUESTED,
} from "../components/Order/orderStatusMap";

export const getInitialStateOrder = () => ({
  idempotencyToken: createToken(),
  items: [],
  number: null,
  status: null,
  errors: null,
  user: {
    name: "",
    phone: "",
  },
  destination: {
    addressIndex: -1,
    address: {
      nickname: "",
      recipient: "",
      directions: "",
      locality: "",
    },
    addChopsticks: false,
    addTeriyaki: false,
    addGinger: false,
    addWasabi: false,
    addSoy: false,
    notes: "",
  },
});

export const initialStateStore = {
  user: {
    name: null,
    email: "",
    phone: "",
    orders: {},
    address: {},
    addresses: [],
    pointEntries: [],
  },
  cart: {
    items: [],
    customizingItem: null,
  },
  order: getInitialStateOrder(),
  layout: {
    sectionNumber: 0,
    cartOpen: false,
    userOpen: false,
    deliveryPriceReminderOpen: false,
    outsideServiceHoursNoticeOpen: false,
  },
};

export const getStoreAndActions = ({ storeAndSetStore, firebase }) => {
  const [store, setStore] = storeAndSetStore;

  const getStore = () => getLocalStorageItemV2({ name: "store" });

  const updateStoreAndLocalStorage = (store) => {
    setStore(store);
    setLocalStorageItem("store", store);
  };

  const updateProperty = (propertyName, value) => {
    updateStoreAndLocalStorage({ ...getStore(), [propertyName]: value });
  };

  /**
   * User actions
   */

  const userOnFirestoreChange = (userOnFirestore) => {
    if (userOnFirestore) {
      updateProperty("user", userOnFirestore);
    }
  };

  const userSetOnFirestore = (user) => {
    const cleanUser = user;
    delete cleanUser.address;

    firebase.set({
      path: "users",
      document: store.user.id,
      data: cleanUser,
    });
  };

  const userSetPropertyOnFirestore = (propertyName, value) => {
    const cleanUser = store.user;
    delete cleanUser.address;

    firebase.set({
      path: "users",
      document: store.user.id,
      data: {
        ...cleanUser,
        [propertyName]: value,
      },
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
          ["phone", "==", store.user.phone],
        ],
      });

      if (users.length > 0) {
        updateProperty("user", users[0]);
      } else {
        updateProperty("user", {
          ...initialStateStore.user,
          email,
          phone,
        });
      }
    }
  };

  const userSetProperty = ({ target }) => {
    updateProperty("user", {
      ...store.user,
      [target.name]: target.value,
    });
  };

  const userSetAddressProperty = ({ target }) => {
    updateProperty("user", {
      ...store.user,
      newAddress: {
        ...store.user.newAddress,
        [target.name]: target.value,
      },
    });
  };

  const userRemoveAddress = (indexToRemove) => () => {
    if (store.user.addresses.length > 1) {
      userSetOnFirestore({
        ...store.user,
        addresses: store.user.addresses.filter(
          (address, index) => index !== indexToRemove
        ),
      });
    }
  };

  const userAddAddress = () => {
    userSetOnFirestore({
      ...store.user,
      addresses: [...store.user.addresses, store.user.newAddress],
      newAddress: {},
    });
  };

  /**
   * Order actions
   */

  const orderOnFirestoreChange = (orderOnFirebase) => {
    console.log("--orderOnFirestoreChange");
    if (orderOnFirebase) {
      console.log("--orderOnFirestoreChange-if");
      console.log("--orderOnFirebase", orderOnFirebase);
      updateProperty("order", orderOnFirebase);
    }
  };

  const orderSetDestinationProperty = ({ target }) => {
    updateProperty("order", {
      ...store.order,
      destination: {
        ...store.order.destination,
        [target.name]: target.value || target.checked,
      },
    });
  };

  const orderSetDestinationAddress = ({ target }) => {
    const address = store.user.addresses[target.value];

    updateProperty("order", {
      ...store.order,
      destination: {
        ...store.order.destination,
        addressIndex: target.value,
        address: address
          ? address
          : initialStateStore.order.destination.address,
      },
    });
  };

  const orderSetDestinationAddressProperty = ({ target }) => {
    if (store.order.destination.addressIndex === -1) {
      updateProperty("order", {
        ...store.order,
        destination: {
          ...store.order.destination,
          address: {
            ...store.order.destination.address,
            [target.name]: target.value,
          },
        },
      });
    }
  };

  const orderCreateOnFirestore = () => {
    const { email, phone } = store.user;
    const order = {
      ...store.order,
      items: store.cart.items,
      number: getOrderNumber(new Date()),
      status: ORDER_STATUS_PENDING,
      user: {
        email,
        phone,
      },
    };

    setTimeout(() => {
      firebase.setV2({
        path: "orders",
        document: order.idempotencyToken,
        data: {
          ...order,
          status: ORDER_STATUS_REQUESTED,
        },
      });

      const orders = { ...store.user.orders, [order.idempotencyToken]: order };
      const addresses =
        order.destination.addressIndex !== -1
          ? store.user.addresses
          : [...store.user.addresses, order.destination.address];
      firebase.setV2({
        path: "users",
        document: store.user.id,
        data: {
          ...store.user,
          addresses,
          orders,
        },
      });
    }, 3000);

    updateStoreAndLocalStorage({
      ...store,
      order,
      layout: {
        ...store.layout,
        cartOpen: false,
        deliveryPriceReminderOpen: false,
      },
    });
  };

  const orderReset = () => {
    updateStoreAndLocalStorage({
      ...store,
      order: getInitialStateOrder(),
      cart: initialStateStore.cart,
    });
  };

  const orderSetRating = (rating) => {
    firebase.set({
      path: "orders",
      document: store.order.idempotencyToken,
      data: {
        ...store.order,
        rating,
      },
    });
  };

  const orderSetComments = (comments) => {
    updateProperty("order", { ...store.order, comments });
  };

  const orderLocalToFirestore = () => {
    firebase.set({
      path: "orders",
      document: store.order.idempotencyToken,
      data: store.order,
    });
  };

  /**
   * Layout actions
   */

  const layoutSetOutsideServiceHoursNoticeOpen = (
    outsideServiceHoursNoticeOpen
  ) => {
    updateProperty("layout", {
      ...store.layout,
      outsideServiceHoursNoticeOpen,
    });
  };

  const layoutSetDeliveryPriceReminderOpen = (deliveryPriceReminderOpen) => {
    updateProperty("layout", { ...store.layout, deliveryPriceReminderOpen });
  };

  const layoutSetSectionNumber = (sectionNumber) => {
    updateProperty("layout", { ...store.layout, sectionNumber });
  };

  const layoutSetCartOpen = () => {
    updateProperty("layout", {
      ...store.layout,
      cartOpen: store.cart.items.length > 0,
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

  const cartRemoveItem = (itemToRemove) => () => {
    const items = store.cart.items.filter(
      (item) => item.id !== itemToRemove.id
    );

    updateStoreAndLocalStorage({
      ...store,
      cart: {
        ...store.cart,
        items,
      },
      layout: {
        ...store.layout,
        cartOpen: items.length > 0,
      },
    });
  };

  const cartSetCustomizingItem = (cartItem) => {
    updateProperty("cart", {
      ...store.cart,
      customizingItem: cartItem,
    });
  };

  const cartUpsertItem = (cartItem) => {
    if (!cartItem.id) {
      const newCartItem = { ...cartItem, id: getCartItemId() };

      updateProperty("cart", {
        ...store.cart,
        items: [...store.cart.items, newCartItem],
        customizingItem: null,
      });
    } else {
      const itemsExceptUpdated = store.cart.items.filter(
        (item) => item.id !== cartItem.id
      );

      updateProperty("cart", {
        ...store.cart,
        items: [...itemsExceptUpdated, cartItem],
        customizingItem: null,
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
    orderLocalToFirestore,
    orderOnFirestoreChange,
    orderCreateOnFirestore,
    orderSetDestinationAddress,
    orderSetDestinationProperty,
    orderSetDestinationAddressProperty,

    layoutSetUserOpen,
    layoutSetCartOpen,
    layoutSetUserClose,
    layoutSetCartClose,
    layoutSetSectionNumber,
    layoutSetDeliveryPriceReminderOpen,
    layoutSetOutsideServiceHoursNoticeOpen,
  };
};
