import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filters/http-exception.filter';
import { ValidationFilter } from './core/filters/http-badException.filter';


const whitelist = ['http://localhost:4200'];


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('authent');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new ValidationFilter());
	app.enableCors({
		origin: function (origin, callback) {
			if (whitelist.indexOf(origin) !== -1) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
		methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
		credentials: true,
	});
  await app.listen(3000);
}
bootstrap();
