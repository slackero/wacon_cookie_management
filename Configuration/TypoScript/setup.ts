
plugin.tx_waconcookiemanagement_cookiefreigabe {
    view {
        templateRootPaths.0 = EXT:wacon_cookie_management/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_waconcookiemanagement_cookiefreigabe.view.templateRootPath}
        partialRootPaths.0 = EXT:wacon_cookie_management/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_waconcookiemanagement_cookiefreigabe.view.partialRootPath}
        layoutRootPaths.0 = EXT:wacon_cookie_management/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_waconcookiemanagement_cookiefreigabe.view.layoutRootPath}
    }
    features {
        #skipDefaultArguments = 1
        # if set to 1, the enable fields are ignored in BE context
        ignoreAllEnableFieldsInBe = 0
        # Should be on by default, but can be disabled if all action in the plugin are uncached
        requireCHashArgumentForActionArguments = 1
    }
    mvc {
        #callDefaultActionIfActionCantBeResolved = 1
    }
}

plugin.tx_waconcookiemanagement_script {
    view {
        templateRootPaths.0 = EXT:wacon_cookie_management/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_waconcookiemanagement_script.view.templateRootPath}
        partialRootPaths.0 = EXT:wacon_cookie_management/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_waconcookiemanagement_script.view.partialRootPath}
        layoutRootPaths.0 = EXT:wacon_cookie_management/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_waconcookiemanagement_script.view.layoutRootPath}
    }
    features {
        #skipDefaultArguments = 1
        # if set to 1, the enable fields are ignored in BE context
        ignoreAllEnableFieldsInBe = 0
        # Should be on by default, but can be disabled if all action in the plugin are uncached
        requireCHashArgumentForActionArguments = 1
    }
    mvc {
        #callDefaultActionIfActionCantBeResolved = 1
    }
}
page.includeJS{
ajquery = EXT:wacon_cookie_management/Resources/Public/JavaScript/jquery.min.js
}
page.includeJSFooter{
waconcookiemanagement = EXT:wacon_cookie_management/Resources/Public/JavaScript/waconcookiemanagement.js 
}

page.includeCSS{
waconcookiemanagement = EXT:wacon_cookie_management/Resources/Public/Css/waconcookiemanagement.css 
}

# these classes are only used in auto-generated templates
plugin.tx_waconcookiemanagement._CSS_DEFAULT_STYLE (

    textarea.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    input.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    .tx-wacon-cookie-management table {
        border-collapse:separate;
        border-spacing:10px;
    }

    .tx-wacon-cookie-management table th {
        font-weight:bold;
    }

    .tx-wacon-cookie-management table td {
        vertical-align:top;
    }

    .typo3-messages .message-error {
        color:red;
    }

    .typo3-messages .message-ok {
        color:green;
    }
)
