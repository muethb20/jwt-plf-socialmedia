import {Role} from "./role.enum";

export interface IUser {
    id: number; // Eindeutige ID des Benutzers
    username: string; // Benutzername des Benutzers
    password: string;
    email: string; // E-Mail-Adresse des Benutzers
    role: Role; // Die Rolle des Benutzers (GUEST, DISTRIBUTER)
}