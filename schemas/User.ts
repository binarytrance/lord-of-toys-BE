import { password, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

// schema - a description of what our data would look like
export const User = list({
  // access:
  // ui:
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO: roles, cart and orders
  },
});
