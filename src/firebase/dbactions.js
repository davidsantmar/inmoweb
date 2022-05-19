import { db } from ".";

export async function addProperty(propertyId, title, description, rooms, meters, price, extras, images) {
  await db.collection(`properties_${propertyId}`).add(title).add(description).add(rooms).add(meters).add(price).add(extras).add(images);
}
