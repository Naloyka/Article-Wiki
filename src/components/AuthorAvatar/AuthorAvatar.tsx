import './AuthorAvatar.scss'

interface AuthorAvatarProps {
    author: string,
    size: 's' | 'm' 
}

function AuthorAvatar({
    author,
    size = 's'
}: AuthorAvatarProps) {

const current_className = size === 's' ? 'author-avatar' : 'author-avatar-m'
 
    return (
        <div className={current_className}
        >{author?.split(' ')
            .map(str => str[0])
            .reduce((acc, current) => acc += current, '')?.toUpperCase() || '-'}
        </div>
    );
}

export default AuthorAvatar;


