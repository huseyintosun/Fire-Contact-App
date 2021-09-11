import React from 'react'
import { Table, Icons, Icon } from 'semantic-ui-react';
import { useFetch } from '../../utils/functions'
import {deleteHandler} from '../../utils/functions'


function Contacts({updateFormHandler}) {
    const { contactList, isLoading } = useFetch();


    return (
        <div>
            <h2 className="contact-header">Contacts</h2>
            <Table size="large" className="table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">Username</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Phone Number</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Gender</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        isLoading ? (
                            <Table.Row>
                                <Table.Cell>
                                    <p>loading...</p>
                                </Table.Cell>
                            </Table.Row>
                        ) : contactList?.length === 0 ? (
                            <Table.Row>
                                <Table.Cell textAlign="center" colSpan={5}>
                                    <p className="nothing-found">Nothing found!</p>
                                </Table.Cell>
                            </Table.Row>
                        ):(
                            contactList?.map((item)=> (
                                <Table.Row key={item?.id}>
                                    <Table.Cell>{item.username.toUpperCase()}</Table.Cell>
                                    <Table.Cell>{item.phoneNumber.toUpperCase()}</Table.Cell>
                                    <Table.Cell>{item.gender.toUpperCase()}</Table.Cell>
                                    <Table.Cell onClick={()=> deleteHandler(item.id)}>
                                        <Icon name="delete"/>
                                    </Table.Cell>
                                    <Table.Cell onClick={()=> updateFormHandler(item)}>
                                        <Icon name="edit"/>
                                    </Table.Cell>

                                </Table.Row>
                            ))
                        )
}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Contacts
