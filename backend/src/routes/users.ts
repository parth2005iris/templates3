import { Router, Request, Response } from 'express';
import prisma from '../config/database.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

// Get current user
router.get('/me', authMiddleware, async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { id: true, email: true, name: true, createdAt: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Update user
router.put('/me', authMiddleware, async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.update({
      where: { id: req.userId },
      data: { name, email },
      select: { id: true, email: true, name: true },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Get subscription
router.get('/subscription', authMiddleware, async (req: Request, res: Response) => {
  try {
    const subscription = await prisma.subscription.findFirst({
      where: { userId: req.userId },
    });

    res.json(subscription || { plan: 'free', status: 'active' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscription' });
  }
});

export default router;
