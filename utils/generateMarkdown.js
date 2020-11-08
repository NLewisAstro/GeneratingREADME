// function to generate markdown for README
function renderLicenseBadge(license){
  if(license !== "none"){
    return '![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)'
  }
  else{
    console.log("you did not pick a license")
  }
}
function renderLicenseLink(license){
    if(license !== "none"){
      return '\n [License](#license)\n'
    }
}
function renderLicenseSection(license){
    if(license !== "none"){
      return(
        'license ## This repo is licensed under ${license} license'
      )
    }
    else{
      return ''
    }
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of contents
  ${data.questions}

  ## Installation
  ${data.dependencies}

  ## Usage
  ${data.repo}

  ## Contributing
  ${data.contribution}

  ##Tests
  ${data.tests}

  ##Questions
  'If you have any questions about the repo, please contact me at ${data.email}'
`;
}

module.exports = generateMarkdown;
