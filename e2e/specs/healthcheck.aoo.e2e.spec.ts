import { ping } from 'tcp-ping';

describe('healthcheck', () => {
  test('reservations', async () => {
    const response = await fetch('http://reservations:3000/');
    expect(response.ok).toBeTruthy();
  });

  test('auth', async () => {
    const response = await fetch('http://auth:3001/');
    expect(response.ok).toBeTruthy();
  });

  test('payments', async (done) => {
    ping({ address: 'payments', port: 3003 }, (err) => {
      if (err) {
        fail();
      }
      done();
    });
  });

  test('notifications', async () => {
    const response = await fetch('http://notifications:3004/');
    expect(response.ok).toBeTruthy();
  });
});
