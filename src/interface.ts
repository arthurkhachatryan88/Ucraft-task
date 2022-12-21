// User Card
export interface IUserType {
    id?: number
    name: string
    username: string
    email: string
    phone: string
    website: string
    address: Address
    company: Company
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

// Users List
export interface IUserProps {
    loading?: boolean
    usersData: Array<IUserType>
}

export interface IUsersInterface {
    users: Array<IUserType>
}