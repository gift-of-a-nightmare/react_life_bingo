import './BubbleWrapper.css'

export function BubbleWrapper() {
    return (
        <div className='canvas'>
            {/* MAGIC GOES HERE */}
            {Array.apply(null, { length: 30 }).map((e, i) => (
                <Bubble/>
            ))};
        </div>
    )
}

export function Bubble() {
    return <div className='bubble'>
        <img style={{maxHeight: '100%', maxWidth: '100%'}} src={`../images/bubble.png`}></img>
    </div>
}