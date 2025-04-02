
const components = {
    TextInput: () => {},
    Select: () => {},
    container: ({children}) => {
        return <div>
        
        {children}</div>
    }
}

function algo(object) {
    return components[object.type].call({children: object.children.map((child) => algo(child)}))
}

Container({children: [<input /> <select>, </select>]})