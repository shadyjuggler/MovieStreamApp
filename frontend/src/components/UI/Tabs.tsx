const Tabs: React.FC<{children: React.ReactNode[]}> = ({children}) => {
    
    const buttons = children.length > 1 ? children!.map((child: React.ReactNode) => {
        return child;
    }) : children;

    return (
        <div className="flex gap-2 p-2 border-2 border-black-2 rounded-lg w-fit bg-black">
            {
                buttons
            }
        </div>
    );
};

export default Tabs;
