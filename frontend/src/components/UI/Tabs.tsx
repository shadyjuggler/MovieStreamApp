const Tabs: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className="flex gap-2 p-2 border-2 border-black-2 rounded-lg w-fit bg-black">
            {
                children
            }
        </div>
    );
};

export default Tabs;
