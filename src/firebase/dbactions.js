import { db } from ".";


export async function addUserFirebase(userId, user) {
  await db.collection(`users_${userId}`).add(user);
}
