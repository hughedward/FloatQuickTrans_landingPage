import { PrismaClient } from '@prisma/client';

/**
 * 全局 Prisma 客户端实例
 * 在开发环境中复用连接，避免热重载时创建过多连接
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * 创建或获取 Prisma 客户端实例
 */
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

/**
 * 优雅关闭数据库连接
 */
export async function disconnectPrisma() {
  await prisma.$disconnect();
}