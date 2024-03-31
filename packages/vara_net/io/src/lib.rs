#![no_std]

use gmeta::{InOut, Metadata, Out};
use gstd::{prelude::*, ActorId};

// 1. Create your own Actions
#[derive(Encode, Decode, TypeInfo, Clone)]
pub enum UserRoleAction {
    Developer,
    Sponsor,
    Organiser,
}

// 2. Create your own Events
#[derive(Encode, Decode, TypeInfo, Hash, PartialEq, PartialOrd, Eq, Ord, Clone, Copy, Debug)]
pub enum UserRoleEvent {
    Developer,
    Sponsor,
    Organiser,
}

// 3. Create your own Struct
#[derive(Default, Clone, Encode, Decode, TypeInfo)]
pub struct IoUserRole {
    pub current_role: String,
    pub all_users: Vec<(ActorId, String)>,
}

pub struct ContractMetadata;

// 5. Define the structure of actions, events and state for your metadata.
impl Metadata for ContractMetadata {
    type Init = ();
    type Handle = InOut<UserRoleAction, UserRoleEvent>;
    type Others = ();
    type Reply = ();
    type Signal = ();
    type State = Out<IoUserRole>;
}
