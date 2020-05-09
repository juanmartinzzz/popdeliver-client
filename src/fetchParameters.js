const {
  writeToFileAsList,
  writeToFileAsObject,
} = require(`./services/data/data`);

const pedidosBaseId = "appklYU85cJ9DTTD9";
const organizationsBaseId = "appZbpoU5fFMxI471";

writeToFileAsObject({
  baseId: organizationsBaseId,
  table: "organizations",
  view: "grid",
  key: "code",
});

writeToFileAsObject({
  baseId: pedidosBaseId,
  table: "parameters",
  view: "grid",
  key: "name",
  downloads: ["image"],
});


writeToFileAsList({ baseId: pedidosBaseId, table: "sections", view: "grid" });

writeToFileAsObject({
  baseId: pedidosBaseId,
  table: "products",
  view: "grid",
  key: "id",
  downloads: ["image"],
});

writeToFileAsObject({
  baseId: pedidosBaseId,
  table: "variants",
  view: "grid",
  key: "id",
  downloads: ["image"],
});
