export const isSidebarOpen = (isOpen) =>  {
    return{
        type: "IS_SIDEBAR_OPEN",
        payload: isOpen
    }
}