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

@Data public class Form1099 {

	@Id
	@Column
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int id;

	@Pattern(regexp = "\\d{9}", message = "The field must contain exactly 9 digits.")
	@Column(name = "payer_tin")
	private int payerTin;

	@Column(name = "payer_name")
	private String payerName;

	@Column(name = "payer_street1")
	private String payerStreet1;

	@Column(name = "payer_street2")
	private String payerStreet2;

	@Column(name = "payer_city")
	private String payerCity;

	@Column(name = "payer_state")
	private String payerState;

	@Column(name = "payer_zip")
	private int payerZip;
	
	@Column(name = "recipient_tin")
	@Pattern(regexp = "\\d{9}", message = "The field must contain exactly 9 digits.")
	private int recipientTin;

	@Column(name = "taxes_withheld2")
	private double taxesWithheld;

	@Column(name = "total_compensation")
	private double totalCompensation;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne
	@JoinColumn(name = "tax_filing_id")
	private TaxFiling taxFiling;

}
