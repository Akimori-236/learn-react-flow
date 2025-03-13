export default function CustomRoundedNode({ data }) {
    return (
        <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {data.label}
        </div>
    )
}
