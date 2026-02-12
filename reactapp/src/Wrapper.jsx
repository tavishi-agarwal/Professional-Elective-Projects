export function Wrapper({ title, children }) {
    return (
        <div>
            <h2>{title}</h2>
            {children} {/* This renders all nested components */}
        </div>
    )
}
