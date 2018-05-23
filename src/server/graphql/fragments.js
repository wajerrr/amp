export const articleFragment = `fragment Article on Content {
    id
    tegID
    type
    url {
      canonical
      comment
    }
    headline
    subheadline
    description
    datePublished
    byline
    text(format: "json")
    regionsAllowed
    isAccessibleForFree
    image {
      main {
        id
        width
        height
        headline
        url {
          canonical
        }
      }
    }
  }`;

export const navigationFragment = `fragment Navigation on Content {
    headline
    id
    hasPart(sort: "isPartOf.context.position") {
      parts {
        id
        headline
        url {
          canonical
        }
        hasPart(sort: "isPartOf.context.position") {
          parts {
            id
            headline
            url {
              canonical
            }
          }
        }
      }
    }
  }`;

export const EditorsPickFragment = `fragment EditorsPick on Content {
  tegID
  id
  hasPart {
    parts {
      id
      channel {
        headline
        url {
          canonical
        }
      }
      headline
      subheadline
      description
      byline
      url {
        canonical
      }
      image{
        main {
          width
          height
          url {
            canonical
          }
        }
      }
    }
}
  }`;
