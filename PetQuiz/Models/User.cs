﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetQuiz
{
    public class User : IdentityUser
    {
        [Required]
        public string NickName { get; set; }
    }
}