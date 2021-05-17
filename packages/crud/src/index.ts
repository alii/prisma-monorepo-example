import {PrismaClient} from '@prisma/client';

const client = new PrismaClient();

void client.$connect().then(async () => {
	const tenant = await client.tenant.create({
		data: {},
	});

	await client.box.create({
		include: {
			tenant: true,
		},
		data: {
			title: 'WTF.',
			tenant_id: tenant.id,
		},
	});
});
