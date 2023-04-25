const Background: React.FC = () => {
    return (
        <div className="z-10">
            <div
                className="fixed -bottom-44 -right-32 w-[360px] h-[374px] rounded-[100%]"
                style={{
                    background:
                        "radial-gradient(49.83% 49.83% at 50.17% 50.17%, rgba(207, 11, 164, 0.15) 0%, rgba(251, 117, 117, 0) 100%)",
                }}
            />
            <div
                className="fixed bottom-16 -right-44 w-[479px] h-[477px] rounded-[100%]"
                style={{
                    background:
                        "radial-gradient(49.83% 49.83% at 50.17% 50.17%, rgba(251, 117, 117, 0.23) 0%, rgba(251, 117, 117, 0) 100%)",
                }}
            />
            <div
                className="fixed -bottom-24 -left-40 w-[441px] h-[608px] rounded-[100%]"
                style={{
                    background:
                        "radial-gradient(49.83% 49.83% at 50.17% 50.17%, rgba(190, 190, 243, 0.5) 0%, rgba(187, 183, 237, 0) 100%)",
                }}
            />
        </div>
    );
};

export default Background;
