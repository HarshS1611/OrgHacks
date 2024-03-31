#![no_std]
use gstd::{async_main, collections::HashMap, msg, prelude::*, ActorId};
use io::*;

#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));

// 1. Create the main state as a static variable.
static mut STATE: Option<UserRole> = None;

// 2. Create the mutability function for your state.
fn state_mut() -> &'static mut UserRole {
    let state = unsafe { STATE.as_mut() };

    unsafe { state.unwrap_unchecked() }
}

// Create a Main State
#[derive(Clone, Default)]
pub struct UserRole {
    pub current_role: String,
    pub all_users: HashMap<ActorId, String>,
}

// Create a implementation on State
impl UserRole {
    #[allow(dead_code)]
    async fn firstmethod(&mut self) {}
    #[allow(dead_code)]
    async fn secondmethod(&mut self) {}
    #[allow(dead_code)]
    async fn thirdmethod(&mut self) {}
}

// 3. Create the init() function of your contract.
#[no_mangle]
extern "C" fn init() {
    let state = UserRole {
        ..Default::default()
    };

    unsafe { STATE = Some(state) };
}

// 4.Create the main() or Async function for your contract.
#[async_main]
async fn main() {
    // We load the input message
    let action: UserRoleAction = msg::load().expect("Could not load Action");

    // We receive an action from the user and update the state. Example:
    match action {
        UserRoleAction::Developer => {
            // Create a variable with mutable state.
            let main_state = state_mut();

            main_state.current_role = "Developer".to_string();

            // Update your second field in state.
            main_state
                .all_users
                .insert(msg::source(), "Developer".to_string());

            // Generate your event.
            let _ = msg::reply(UserRoleEvent::Developer, 0);
        }
        UserRoleAction::Sponsor => {
            // Create a variable with mutable state.
            let main_state = state_mut();

            // Update your first field in state.
            main_state.current_role = "Sponsor".to_string();

            // Update your second field in state.
            main_state
                .all_users
                .insert(msg::source(), "Sponsor".to_string());

            // Generate your event.
            let _ = msg::reply(UserRoleEvent::Sponsor, 0);
        }
        UserRoleAction::Organiser => {
            // Create a variable with mutable state.
            let main_state = state_mut();

            // Update your first field in state.
            main_state.current_role = "Organiser".to_string();

            // Update your second field in state.
            main_state
                .all_users
                .insert(msg::source(), "Organiser".to_string());

            // Generate your event.
            let _ = msg::reply(UserRoleEvent::Organiser, 0);
        }
    };
}

// 5. Create the state() function of your contract.
#[no_mangle]
extern "C" fn state() {
    let state = unsafe { STATE.take().expect("Unexpected error in taking state") };

    msg::reply::<IoUserRole>(state.into(), 0).expect(
        "Failed to encode or reply with `<ContractMetadata as Metadata>::State` from `state()`",
    );
}

// Implementation of the From trait for converting CustomStruct to IoCustomStruct
impl From<UserRole> for IoUserRole {
    // Conversion method
    fn from(value: UserRole) -> Self {
        // Destructure the CustomStruct object into its individual fields
        let UserRole {
            current_role,
            all_users,
        } = value;

        // Perform some transformation on second field, cloning its elements (Warning: Just for HashMaps!!)
        let all_users = all_users.iter().map(|(k, v)| (*k, v.clone())).collect();

        // Create a new IoCustomStruct object using the destructuOrganiser fields
        Self {
            current_role,
            all_users,
        }
    }
}
