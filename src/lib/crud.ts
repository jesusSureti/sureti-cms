import { sql } from "./db";

// Crear
export async function createFAQ(data) {
  const { title, body, tags, categories, platforms, author } = data;
  return await sql`INSERT INTO faqs (title, body, tags, categories, platforms, author) VALUES (${title}, ${body}, ${tags}, ${categories}, ${platforms}, ${author}) RETURNING *`;
}

// Leer
export async function getFAQs() {
  let res = await sql`SELECT * FROM faqs`;
  return res
}

// Actualizar
export async function updateFAQ(id, data) {
  const { title, body, tags, categories, platforms, author } = data;
  return await sql`UPDATE faqs SET title = ${title}, body = ${body}, tags = ${tags}, categories = ${categories}, platforms = ${platforms}, author = ${author}, update_date = NOW() WHERE faq_id = ${id} RETURNING *`;
}

// Eliminar
export async function deleteFAQ(id) {
  return await sql`DELETE FROM faqs WHERE faq_id = ${id} RETURNING *`;
}