import type { Request, Response } from "express";

export class MiscellaneousController {
	public health(_req: Request, res: Response) {
		const responseBody = {
			message: "Celery",
		};

		res.status(200).json(responseBody);
	}
}
