export default function MsgBox({userName, textColor}) {
    let styles = {color: textColor}
    return ( 
        <div style={styles}>
            Hello {userName}!
        </div>
    );
};
