type NameProps = {
    name:{
        firstName: string
        lastName: string
    }
}
export const Person = (props: NameProps) => {
    return <div>{props.name.firstName} {props.name.lastName}</div>
}