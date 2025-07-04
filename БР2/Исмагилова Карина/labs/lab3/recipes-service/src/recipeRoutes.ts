import { Router } from "express";
import { recipeController } from "./recipeController";
import authMiddleware from "./auth.middleware";

const router = Router();

/**
 * @openapi
 * /api/recipes:
 *   get:
 *     summary: Получить список всех рецептов
 *     tags:
 *       - Recipes
 *     responses:
 *       200:
 *         description: Список рецептов
 */
router.get("/", recipeController.getAllRecipes);

/**
 * @openapi
 * /api/recipes/{id}:
 *   get:
 *     summary: Получить рецепт по ID
 *     tags:
 *       - Recipes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Найденный рецепт
 *       404:
 *         description: Рецепт не найден
 */
router.get("/:id", recipeController.getRecipeById);

/**
 * @openapi
 * /api/recipes:
 *   post:
 *     summary: Создать новый рецепт
 *     tags:
 *       - Recipes
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - ingredients
 *               - instructions
 *               - difficulty_level
 *               - preparation_time
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 255
 *               description:
 *                 type: string
 *               ingredients:
 *                 type: string
 *                 items:
 *                   type: string
 *               instructions:
 *                 type: string
 *               difficulty_level:
 *                 type: string
 *               preparation_time:
 *                 type: integer
 *                 minimum: 1
 *     responses:
 *       201:
 *         description: Рецепт создан
 */
router.post("/", authMiddleware, recipeController.createRecipe);

/**
 * @openapi
 * /api/recipes/{id}:
 *    patch:
 *     summary: Обновить рецепт
 *     tags:
 *       - Recipes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 255
 *               description:
 *                 type: string
 *               ingredients:
 *                 type: string
 *               instructions:
 *                 type: string
 *               difficulty_level:
 *                 type: string
 *               preparation_time:
 *                 type: integer
 *                 minimum: 1
 *     responses:
 *       200:
 *         description: Рецепт обновлен
 *       404:
 *         description: Рецепт не найден
 */
router.patch("/:id", authMiddleware, recipeController.updateRecipe);

/**
 * @openapi
 * /api/recipes/{id}:
 *   delete:
 *     summary: Удалить рецепт
 *     tags:
 *       - Recipes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Рецепт удалён
 *       404:
 *         description: Рецепт не найден
 */
router.delete("/:id", authMiddleware, recipeController.deleteRecipe);

export default router;