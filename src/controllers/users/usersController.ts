import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface IUser {
    email: string;
    password: string;
}

// Mock database
const users: IUser[] = [];

// Sign-up
export const signUp = async (req: Request, res: Response) => {
    try {
        const email = req.body.email as string | undefined;
        const password = req.body.password as string | undefined;

        if (!email || email === undefined) {
            return res.status(400).send('Email is required');
        }
        if (!password || password === undefined) {
            return res.status(400).send('Password is required');
        }

        const hashedPassword: string = await bcrypt.hash(password, 12);
        const newUser: IUser = { email: email, password: hashedPassword };
        users.push(newUser);
        res.status(201).send('User created');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

// Sign-in
export const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = users.find((u: IUser) => u.email === email);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email }, 'secret_key');
            res.json({ token });
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

// Password recovery
export const passwordRecovery = async (req: Request, res: Response) => {
    try {
        const { email, newPassword } = req.body;
        const user = users.find(u => u.email === email);
        if (user) {
            user.password = await bcrypt.hash(newPassword, 10);
            res.send('Password updated');
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};