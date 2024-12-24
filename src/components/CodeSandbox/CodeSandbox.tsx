const CodeSandbox = ({ id }: { id: number }) => {
    return (
        <iframe
            src={`https://codesandbox.io/embed/${id}?hidenavigation=1&view=split&hidedevtools=1`}
            style={{
                width: '100%',
                height: '500px',
                border: 0,
                borderRadius: '4px',
                overflow: 'hidden',
                marginTop: '8px',
                marginBottom: '60px',
            }}
            loading="lazy"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
    );
};

export default CodeSandbox;
