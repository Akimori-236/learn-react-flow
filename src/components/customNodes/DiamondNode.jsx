export default function CustomDiamondNode() {
    return (
        <svg width="40" height="60">
            <rect x="10" y="0" width="20" height="30" rx="5" />
            <rect x="20" y="0" width="20" height="30" rx="5" transform="rotate(-45 25 15)" />
        </svg>
    );
}