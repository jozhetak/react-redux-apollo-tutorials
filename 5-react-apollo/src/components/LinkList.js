import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        description
        url
      }
    }
  }
`

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>
          if (error) return <div>Error: ${error}</div>

          return (
            <div>
              {data.feed.links.map(link => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList