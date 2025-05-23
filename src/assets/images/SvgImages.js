import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export const FlowerSvg = () => {
    return (
        <Svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.6072 0H40.3928V27.5151L30.0855 2.00353L24.3237 4.33145L34.8981 30.5039L14.9379 10.5437L10.5438 14.9379L29.6747 34.0688L4.88248 23.2369L2.3945 28.9314L28.6276 40.3928H0V46.6072H28.6275L2.39451 58.0686L4.88248 63.7632L29.6747 52.9312L10.5438 72.0621L14.9379 76.456L34.8981 56.4961L24.3237 82.6687L30.0855 84.9964L40.3928 59.4849V87H46.6072V59.4849L56.9145 84.9964L62.6761 82.6687L52.1021 56.4961L72.0621 76.456L76.456 72.0621L57.3252 52.9312L82.1176 63.7632L84.6053 58.0686L58.3727 46.6072H87V40.3928H58.3722L84.6053 28.9314L82.1176 23.2369L57.3252 34.0688L76.456 14.9379L72.0621 10.5437L52.1021 30.5039L62.6761 4.33145L56.9145 2.00353L46.6072 27.5151V0Z"
                    fill="#A48F5F"
                />
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Rect width="87" height="87" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
};