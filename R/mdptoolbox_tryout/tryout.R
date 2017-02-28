library(MDPtoolbox)


# create transitionmatrix
transition_matrix      <- array(0, c(2, 2, 2))
transition_matrix[,,1] <- matrix(c(0, 1, 0.8, 0.2),     nrow=2, ncol=2, byrow=TRUE)
transition_matrix[,,2] <- matrix(c(0.5, 0.5, 0.1, 0.9), nrow=2, ncol=2, byrow=TRUE)

# create reward matrix 
reward_matrix <- matrix(c(10, 10, 1, -5), nrow=2, ncol=2, byrow=TRUE)

# check whether r and t are well defined
mdp_check(transition_matrix, reward_matrix)
