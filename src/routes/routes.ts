import { Pool } from "pg";
import dotenv from "dotenv";
import { Router } from "express";

const router = Router();

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

router.get("/phrases", async (req, res, next) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const offset = (page - 1) * limit;
  const search = req.query.search ? `%${req.query.search}%` : "%";
  const id = parseInt(req.query.search as string, 10) || 0;

  try {
    const result = await pool.query(
      "SELECT * FROM phrases WHERE content LIKE $1 OR author LIKE $1 OR id = $2 LIMIT $3 OFFSET $4",
      [search, id, limit, offset]
    );
    const countResult = await pool.query(
      "SELECT COUNT(*) FROM phrases WHERE content LIKE $1 OR author LIKE $1 OR id = $2",
      [search, id]
    );
    const totalItems = parseInt(countResult.rows[0].count, 10);
    const totalPages = Math.ceil(totalItems / limit);

    res.json({
      data: result.rows,
      page,
      limit,
      totalItems,
      totalPages,
    });
  } catch (e) {
    next(e);
  }
});

export default router;
