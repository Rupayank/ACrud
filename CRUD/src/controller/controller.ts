import { Request, Response } from "express";
const db = require("../db");
module.exports = {
	async addStud(req: Request, res: Response) {
		try {
			const { name, branch } = req.body;
			const newStud = await db.query(
				"INSERT INTO public.info (name,branch) VALUES ($1,$2) RETURNING *",
				[name, branch]
			);
			res.status(200).send(newStud.rows[0]);
		} catch (err) {
			console.log(err);
			res.send(err);
		}
	},
	async getAllStud(req: Request, res: Response) {
		try {
			const stud = await db.query("SELECT * FROM public.info");
			res.status(200).send(stud.rows);
		} catch (err) {
			console.log(err);
			res.send(err);
		}
	},
	async getIndividualStud(req: Request, res: Response) {
		try {
			const stud = await db.query("SELECT * FROM public.info WHERE id=$1", [
				req.params.id,
			]);
			res.status(200).send(stud.rows);
		} catch (err) {
			console.log(err);
			res.send(err);
		}
	},
	async updateIndividualStud(req: Request, res: Response) {
		try {
			const updateStud = await db.query(
				"UPDATE public.info SET branch=$1 WHERE id=$2",
				[req.body.branch, req.params.id]
			);
			res.status(200).send({ message: "Branch updated" });
		} catch (err) {
			console.log(err);
			res.send(err);
		}
	},
	async deleteIndividualStud(req: Request, res: Response) {
		try {
			const stud = await db.query("DELETE FROM public.info WHERE id=$1", [
				req.params.id,
			]);
			res.status(200).send({ message: "Deleted" });
		} catch (err) {
			console.log(err);
			res.send(err);
		}
	},
};
