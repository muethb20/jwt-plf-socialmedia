import {Role} from "./role.enum";

export interface IPost {
    postedAt: Date; // Das Datum und die Uhrzeit, wann der Beitrag erstellt wurde (ISO 8601 Format)
    username: string; // Der Benutzername des Benutzers, der den Beitrag gepostet hat
    msg: string; // Der Inhalt des Beitrags
    role: Role; // Die Rolle des Benutzers, der den Beitrag gepostet hat
}
