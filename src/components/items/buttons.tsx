import {withStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'

export const RedPrimaryButton = withStyles(theme => ({
    root: {
        background: theme.palette.secondary.main,
        color: '#fff',
        borderRadius: theme.spacing(3),
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
        transition: 'background 300ms',
        '&:hover': {
            background: theme.palette.secondary.dark //'hsl(359, 94%, 26%)'
        }
    }
}))(Button)

export const RedSecondaryButton = withStyles(theme => ({
    root: {
        background: 'transparent',
        border: `2px solid #000`,
        borderRadius: theme.spacing(3),
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
        //color: 'hsl(359, 80%, 50%)',
        transition: 'background color border 300ms',
        '&:hover': {
            color: '#fff',
            background: theme.palette.secondary.dark,
            borderColor: theme.palette.secondary.dark
        }
    }
}))(Button)