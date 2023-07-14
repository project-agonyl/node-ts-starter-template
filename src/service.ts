/**
 * Main service entry point.
 */

import { PROJECT_NAME } from './constants';

// Add startup logic here.
async function startService() {
  console.log(`Hello from ${PROJECT_NAME} service!`);
}

// Add cleanup logic here.
async function stopService() {
  console.log(`Goodbye from ${PROJECT_NAME} service!`);
}

startService();

const errorTypes = ['unhandledRejection', 'uncaughtException'];
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

// Gracefully shutdown on unhandled exceptions and signals.
errorTypes.forEach((type) => {
  process.on(type, (e) => {
    try {
      console.log(`Process terminated: ${type}`, 'errors');
      console.error(e);
      stopService();
    } catch {
      // ignored
    } finally {
      process.exit(1);
    }
  });
});

// Gracefully shutdown on unhandled exceptions and signals.
signalTraps.forEach((type) => {
  process.once(type, () => {
    try {
      console.log(`Process terminated: ${type}`);
      stopService();
    } catch {
      // ignored
    } finally {
      process.kill(process.pid, type);
    }
  });
});
