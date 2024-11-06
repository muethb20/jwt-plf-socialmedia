import {IPost} from "../interfaces/feed.interface";
import {Role} from "../interfaces/role.enum";
import {createDate} from "../services/util/util.service";

export const mockPosts: IPost[] = [
    {
        postedAt: createDate(0), // Heute
        username: 'guestUser',
        msg: 'Heute habe ich einen neuen Beitrag gepostet.',
        role: Role.GUEST
    },
    {
        postedAt: createDate(1), // Gestern
        username: 'distributerUser',
        msg: 'Gestern war ein großartiger Tag zum Posten!',
        role: Role.DISTRIBUTOR
    },
    {
        postedAt: createDate(2), // Vor 2 Tagen
        username: 'guestUser',
        msg: 'Vor 2 Tagen habe ich an einem neuen Projekt gearbeitet.',
        role: Role.GUEST
    },
    {
        postedAt: createDate(3), // Vor 3 Tagen
        username: 'distributerUser',
        msg: 'Vor 3 Tagen haben wir ein neues Produkt eingeführt.',
        role: Role.DISTRIBUTOR
    },
    {
        postedAt: createDate(4), // Vor 4 Tagen
        username: 'guestUser',
        msg: 'Vor 4 Tagen war ein ruhiger Tag.',
        role: Role.GUEST
    }
];
