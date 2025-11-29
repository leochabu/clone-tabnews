import database from "infra/database.js";
async function status(request, response) {
  const updated_at = new Date().toISOString();

  response.status(200).json({
    updated_at: updated_at,
  });
}

export default status;
