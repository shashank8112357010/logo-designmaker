export default function ButtonAttom({ title, bgColor, textColor, customWidth, textSize , padding , rounded }){
    return(
        <button className={`${bgColor} ${textColor}  ${padding} ${rounded} ${customWidth} ${textSize}`} aria-disabled="true">
        {title}
    </button>
    )
}