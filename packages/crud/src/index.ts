import {PrismaClient} from '@prisma/client';
import {add} from '@acme/example';

const client = new PrismaClient();
console.log(add(20, 20));

void client.$connect().then(async () => {
	const tenant = await client.tenant.create({
		data: {
			name: 'Tenant name',
		},
	});

	await client.box.create({
		include: {
			tenant: true,
		},
		data: {
			title: 'Title here test',
			tenant_id: tenant.id,
		},
	});
});
