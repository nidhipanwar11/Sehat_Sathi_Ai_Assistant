const ScrollBar: React.FC = () => {
    return (
        <style>
            {`
                body {
                    overflow: hidden;
                }
                
                .custom-scrollbar {
                    overflow-y: auto;
                    height: 100vh;
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #0d0d1d;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #0d0d1d 40%, #432663 60%);
                    border-radius: 10px;
                }
            `}
        </style>
    );
};

export default ScrollBar;
