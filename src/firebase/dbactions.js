import { db } from ".";

export async function addProperty(propertyId, title, description, price, rooms, meters, extras) {
  await db.collection(`messages_${propertyId}`).add(title).add(description).add(price).add(rooms).add(meters).add(extras);
}
