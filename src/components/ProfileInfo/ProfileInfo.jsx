import React from 'react';
import st from './profileinfo.module.css'

const ProfileInfo = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let editPostText = () => {
        let text = newPostElement.current.value;
        props.editPostText(text);
    };

    return (
        <div className={st.wrapper}>

            {/* top rectangle width profile name */}
            <div className={st.name}>
                <h1>
                    {props.name}
                </h1>
                <span className={`${st.online} ${st.active}`}>online</span>
            </div>

            {/* rectangle width profile information (empty for now) */}
            <div className={st.info}></div>

            {/* text area to create a new post */}

            <div className={st.addPost}>
                {/* text area */}
                <textarea
                    onChange={editPostText}
                    ref={newPostElement}
                    value={props.newPostText}
                ></textarea>
                <button onClick={addPost} className={st.post_button}>
                    <span>Post</span>
                </button>
            </div>
        </div>
    )
}

export default ProfileInfo;