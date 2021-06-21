type ButtonProps = {
    text?: string;
}

export function Button(props: ButtonProps){
    return (
        <div>
            <button>{props.text || 'Default'}</button>
        </div>
    )    
}