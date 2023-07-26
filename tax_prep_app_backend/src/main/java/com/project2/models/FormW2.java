package com.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import lombok.Data;


@Entity
@Table(name = "form_w2")
@Data public class FormW2 {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// Validation constraint that forces 9 digits
	@Column(name = "ein")
	@Pattern(regexp = "\\d{9}", message = "The field must contain exactly 9 digits.")
	private int ein;

	@Column(name = "employer_name")
	private String employerName;

	@Column(name = "employer_street1")
	private String employerStreet1;

	@Column(name = "employer_street2")
	private String employerStreet2;

	@Column(name = "employer_city")
	private String employerCity;

	@Column(name = "employer_state")
	private String employerState;

	@Column(name = "employer_zip")
	private int zip;

	@Column(name = "wages_and_tips")
	private double wages;

	@Column(name = "taxes_withheld")
	private double taxesWithheld;

	@Column(name = "ss_withheld")
	private double ssWithheld;

	@Column(name = "medicare_withheld")
	private double medicareWithheld;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne
	@JoinColumn(name = "employee_ssn")
	private UserDetail ssn;

	@ManyToOne
	@JoinColumn(name = "tax_filing_id")
	private TaxFiling taxFiling;	
	
}
